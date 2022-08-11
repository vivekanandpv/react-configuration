export interface AppConfig {
  configuration: string;
  baseUrl: string;
}

const getConfig = (e: NodeJS.ProcessEnv): AppConfig => {
  console.log(e, e.REACT_APP_BUILD_CONFIG);
  switch (e.REACT_APP_BUILD_CONFIG) {
    case 'uat': {
      return {
        baseUrl: 'https://uat.example.com',
        configuration: e.REACT_APP_BUILD_CONFIG,
      };
    }
    case 'preprod': {
      return {
        baseUrl: 'https://preprod.example.com',
        configuration: e.REACT_APP_BUILD_CONFIG,
      };
    }
    case 'staging': {
      return {
        baseUrl: 'https://staging.example.com',
        configuration: e.REACT_APP_BUILD_CONFIG,
      };
    }
    case 'demo': {
      return {
        baseUrl: 'https://demo.example.com',
        configuration: e.REACT_APP_BUILD_CONFIG,
      };
    }
    default: {
      return {
        baseUrl: 'https://default.example.com',
        configuration: e.REACT_APP_BUILD_CONFIG ?? 'default',
      };
    }
  }
};

export const APP_CONFIG = getConfig(process.env);
