import React from 'react';

import {
  CalloutPrimary,
  PrimaryContent,
  SecondaryContent,
} from '../components';
import { sectionEnum } from '../enums';

export function SectionMapper({ section }) {
  const Section = determineSection(section.sectionType);

  return <Section section={section} />;

  function determineSection(sectionType) {
    switch (sectionType) {
      case sectionEnum.CALLOUT_PRIMARY:
        return CalloutPrimary;
      case sectionEnum.CONTENT_PRIMARY:
        return PrimaryContent;
      case sectionEnum.CONTENT_SECONDARY:
        return SecondaryContent;
      default:
        break;
    }
  }
}
