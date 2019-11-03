
export enum ModuleTypes {
  PUBLIC = "public",
  CIVIIAN = "civilian",
  CAD = "cad",
  MOBILE = "mobile",
  CASE = "case",
  SETUP = "setup"
}

export interface ModuleIconRoute {
  regexp: RegExp,
  default: string
}

export interface ModuleIcon {
  title: string,
  type: ModuleTypes,
  route: ModuleIconRoute,
  auth?: Boolean,
  icon: string
}