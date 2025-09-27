export interface ISettings {
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
}

export interface IElectronAPI {
  minimizeWindow: () => void;
  maximizeWindow: () => void;
  closeWindow: () => void;
  quitApp: () => void;
  openExternalLink: (url: string) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
