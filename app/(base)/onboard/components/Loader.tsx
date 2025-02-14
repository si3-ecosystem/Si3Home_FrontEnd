import { ConfigProvider, Spin } from "antd";

export default function Loader(){
    return (
        <div className="fixed top-0 bg-[rgba(0,0,0,0.4)] left-0 w-full h-full flex items-center justify-center">
        <div className="p-4">
            <ConfigProvider
            theme={{
                token:{
                    colorPrimary:"#FAB7D0"
                }
            }}
            >
                <Spin size="large"/>
            </ConfigProvider>
        </div>
     </div>
    )
}