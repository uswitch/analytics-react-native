export type SegmentAppsflyerSettings = {
  appId?: string;
  devKey: string;
  httpFallback: boolean;
  rokuAppID?: string;
  trackAttributionData: boolean;
  type: string;
  versionSettings: { [key: string]: string[] };
  isDebug?: boolean;
  onInstallConversionDataListener?: boolean;
  onDeepLinkListener?: boolean;
  timeToWaitForATTUserAuthorization?: number;
};
