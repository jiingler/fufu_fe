// eslint-disable-next-line no-unused-vars
type Clinic = {
  id?: string;
  isHome?: boolean;
  name?: string;
  address?: string;
  tel?: string;
  images?: Image[];
  // eslint-disable-next-line no-undef
  clinicPeriod: ClinicPeriod[];
  // eslint-disable-next-line no-undef
  clinicTime: Nullable<ClinicTime>;
};

// eslint-disable-next-line no-unused-vars
// type ClinicOptional = Partial<Clinic>;
