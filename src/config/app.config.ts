interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Manage bookings', 'Create reviews', 'Create reports'],
  ownerAbilities: ['Manage company information', 'Manage cars', 'View bookings', 'View reports'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7e6dda7b-c032-4835-8b34-15874c0937f8',
};
