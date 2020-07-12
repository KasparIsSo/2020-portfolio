import { universityOfTorontoContent } from 'projects';

import { projectEnum } from '../enums';

export function projectMapper(project) {
  switch (project) {
    case projectEnum.U_OF_T_WEBSITE:
      return universityOfTorontoContent;
    default:
      break;
  }
}
