declare namespace JSX {
    interface IntrinsicElements {
      'ethermail-subscribe': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        widget: string;
        theme?: string;
        input?: string;
        'wallet-connect-project-id'?: string;
        rpc?: string;
      };
    }
  }
  