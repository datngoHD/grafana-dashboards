export interface IllumassAppSettings {
  tenantShortName?: string | null;
  redirectGabbyPath?: string | null;
  oncall?: {
    webhookId?: string;
    escalationChainId?: string;
    escalationPolicyId?: string;
    alertReceiveChannelId?: string;
  };
  uom?: {
    pressure?: string;
    temperature?: string;
    length?: string;
    flowRate?: string;
  };
}
