export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface PreferenceType {
  icon: JSX.Element;
  title: string;
  description: string;
}
