type Clinic  = {
  isHome: boolean,
  name: stirng,
  address: string,
  tel: string,
  images: Image[],
  clinicTime: ClinicTime,
}

type ClinicOptional = Partial<Clinic>