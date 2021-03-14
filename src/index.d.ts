declare module 'bitly-field-react' {
  import { FC } from 'react';

  export interface SuccessResponse {
    id: string;
    link: string;
    long_url: string;
    deeplinks: any[];
    custom_bitlinks: any[];
    created_at: string;
    archived: boolean;
    tags: any[];
    references: any;
  }

  export const BitlyField: FC<{
    config: {
      accessToken: string;
      domain?: string | null;
      title?: string | null;
      group_guid?: string | null;
      tags?: string[];
      deeplinks?: any[];
    };
    onSuccess: (response: SuccessResponse) => void;
    onError?: (error: any) => void;
    className?: string | null;
    placeholder?: string;
    inputClassName?: string | null;
    buttonClassName?: string | null;
  }>
}
