import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import client from '@/client';

interface CardPopupProps {
  show: boolean;
  handleClose: () => void;
}

interface FormData {
  communityName: string;
  communityLeaderName: string;
  communityLeaderEmail: string;
  xHandle: string;
  warpastHandle: string;
  communityWebsite: string;
  communityLocation: string;
  communityType: string;
  communityDescription: string;
  communityLogo: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
}

const CardPopup: React.FC<CardPopupProps> = ({ show, handleClose }) => {
  const [formData, setFormData] = useState<FormData>({
    communityName: '',
    communityLeaderName: '',
    communityLeaderEmail: '',
    xHandle: '',
    warpastHandle: '',
    communityWebsite: '',
    communityLocation: '',
    communityType: '',
    communityDescription: '',
    communityLogo: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: '',
      },
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [wrongImageType, setWrongImageType] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [websiteError, setWebsiteError] = useState<string | null>(null);
  const [warpxHandleError, setWarpxHandleError] = useState<string | null>(null);
  const [xHandleError, setXHandleError] = useState<string | null>(null);
  

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validateWarpxHandle  = (url: string) => {
    // Regular expression for basic URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };
  const validateXHandle  = (url: string) => {
    // Regular expression for basic URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };
  const validateWebsite = (url: string) => {
    // Regular expression for basic URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };
  
  
  
  const handleFileChange = async (event:any) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/svg+xml' || file.type === 'image/jpeg')) {
      setUploadingLogo(true);
      setWrongImageType(false);

      try {
        const response = await client.assets.upload('image', file);
        setFormData((prevData) => ({
          ...prevData,
          communityLogo: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: response._id,
            },
          },
        }));

        console.log('Uploaded image _id:', response._id);
      } catch (uploadError) {
        console.error('Error uploading image:', uploadError);
        setWrongImageType(true);
      } finally {
        setUploadingLogo(false);
      }
    } else {
      setWrongImageType(true);
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'communityLeaderEmail') {
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError(null);
      }
    }
 switch (name) {
    case 'communityWebsite':
      if (value.trim() !== '' && !validateWebsite(value)) {
        setWebsiteError('Please enter a valid website URL');
      } else {
        setWebsiteError(null);
      }
      break;
    case 'warpxHandle':
      if (value.trim() !== '' && !validateWarpxHandle(value)) {
        setWarpxHandleError('Please start with @ symbol');
      } else {
        setWarpxHandleError(null);
      }
      break;
    case 'xHandle':
      if (value.trim() !== '' && !validateXHandle(value)) {
        setXHandleError('X Handle must be at least 3 characters long');
      } else {
        setXHandleError(null);
      }
      break;
    default:
      break;
  }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      'communityName',
      'communityLeaderName',
      'communityLeaderEmail',
      'communityLocation',
      'communityType',
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        alert(`${field.replace(/([A-Z])/g, ' $1')} is required.`);
        return;
      }
    }

    try {
      const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const data = {
        _type: 'cards',
        ...formData,
        published: false 
      };

      console.log('Submitting data to Sanity:', data);

      const response = await axios.post(
        'https://h4ttr3aq.api.sanity.io/v2021-06-07/data/mutate/production',
        { mutations: [{ create: data }] },
        config
      );

      console.log('Sanity Response:', response.data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting form', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
      alert('There was an error submitting the form.');
    }
  };

  return (
    show && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8 overflow-auto"
        aria-labelledby="popup-title"
        role="dialog"
        aria-modal="true"
      >
        <div className={`relative bg-white mb p-6 rounded-lg shadow-lg w-full max-w-lg ${isSubmitted ? 'm-5' : 'mt-[450px] '}`}>
          <img src="/images/circleBg.png" alt="" className="absolute inset-0 z-20 mt-10 w-full h-[70%]" />
          <div className="flex justify-between items-center mb-4">
            <h2
              id="popup-title"
              className={`text-2xl clash font-bold leading-6 text-[20px] ${
                isSubmitted ? 'hidden' : ''
              }`}
            >
              Add Community
            </h2>
            <i
              className="fas fa-times text-gray-600 text-lg cursor-pointer absolute top-2 right-4"
              onClick={handleClose}
            ></i>
          </div>
          {isSubmitted ? (
            <div className="text-center relative">
              <img src="/images/waiting.png" alt="" />
              <p className="text-[14px] leading-5 fira-mono-regular text-center text-[#696969] ">
                Thanks for submitting! A member of our team will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
             <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">
                  Community Name<span className="text-[#FF99F3]">*</span>
                </label>
                <input
                  type="text"
                  name="communityName"
                  value={formData.communityName}
                  onChange={handleChange}
                  className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0]"
                  placeholder="Community Name"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">
                  Community Leader Name<span className="text-[#FF99F3]">*</span>
                </label>
                <input
                  type="text"
                  name="communityLeaderName"
                  value={formData.communityLeaderName}
                  onChange={handleChange}
                  className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0]"
                  placeholder="Community Leader Name"
                />
              </div>
  
              <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">
              Community Leader Email<span className="text-[#FF99F3]">*</span>
              </label>
              <input
              type="text"
              name="communityLeaderEmail"
              value={formData.communityLeaderEmail}
              onChange={handleChange}
              className={`w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0] ${
              emailError ? 'outline-red-500' : '' // Add red border on error
              }`}
              placeholder=" Community Leader Email"
              />
              {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
              </div>

  
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">X Handle</label>
                <input
                  type="text"
                  name="xHandle"
                  value={formData.xHandle}
                  onChange={handleChange}
                  className={`w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0] ${
                    xHandleError ? 'border-red-500' : ''
                    }`}
                  placeholder="X Handle"
                />
                 {xHandleError && (
                  <p className="text-red-500 text-sm mt-1">{websiteError}</p>
                  )}
              </div>
                  <div className="mb-4">
                  <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Warpast Handle</label>
                  <input
                  type="text"
                  name="warpastHandle"
                  value={formData.warpastHandle}
                  onChange={handleChange}
                  className={`w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0] ${
                    warpxHandleError ? 'border-red-500' : ''
                  }`}
                  placeholder="Warpast Handle"
                  />
                  {warpxHandleError && (
                  <p className="text-red-500 text-sm mt-1">{websiteError}</p>
                  )}
                  </div>

  
                <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Website</label>
                <input
                type="text"
                name="communityWebsite"
                value={formData.communityWebsite}
                onChange={handleChange}
                className={`w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0] ${
                websiteError ? 'outline-red-500' : '' 
                }`}
                placeholder="Community Website"
                />
                {websiteError && (
                <p className="text-red-500 text-sm mt-1">{websiteError}</p>
                )}
                </div>

  
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">
                  Community Location<span className="text-[#FF99F3]">*</span>
                </label>
                <select
                  name="communityLocation"
                  value={formData.communityLocation}
                  onChange={handleChange}
                  className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0]"
                >
                  <option value="" disabled>
                    Community Location
                  </option>
                  <option value="Canada" className="fira-mono-regular hover:bg-pink-200 p-2 rounded-lg text-black">
                    Canada
                  </option>
                  <option value="U.S.A" className="rounded-lg text-black">
                    U.S.A
                  </option>
                  <option value="LATAM" className="rounded-lg text-black">
                    LATAM
                  </option>
                  <option value="Europe" className="rounded-lg text-black">
                    Europe
                  </option>
                  <option value="Africa" className="rounded-lg text-black">
                    Africa
                  </option>
                </select>
              </div>
  
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">
                  Community Type<span className="text-[#FF99F3]">*</span>
                </label>
                <select
                  name="communityType"
                  value={formData.communityType}
                  onChange={handleChange}
                  className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 bg-[#f0f0f0]"
                >
                  <option value="" disabled>
                    Community Type
                  </option>
                  <option value="Education" className="rounded-lg text-black">
                    Education
                  </option>
                  <option value="Regional" className="rounded-lg text-black">
                    Regional
                  </option>
                  <option value="NFT Collection" className="rounded-lg text-black">
                    NFT Collections
                  </option>
                  <option value="DAOs" className="rounded-lg text-black">
                    DAO&apos;s
                  </option>
                </select>
              </div>
  
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Description</label>
                <textarea
                  name="communityDescription"
                  value={formData.communityDescription}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 bg-[#f0f0f0]"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">
                  Community Logo<span className="text-[#FF99F3]">*</span>
                </label>
                <input type="file" onChange={handleFileChange} accept="image/*" />
                {uploadingLogo && <p>Uploading...</p>}
                {wrongImageType && <p>Wrong image type. Please upload a PNG, SVG, or JPEG image.</p>}
              </div>

              <button type="submit" disabled={uploadingLogo} className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 float-end clash font-medium text-[20px]">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  );
};

export default CardPopup;
