import React from 'react';

import { CalloutPrimary } from '../components';
import { sectionEnum } from '../enums';

export function SectionMapper({ section }) {
  const Section = determineSection(section.sectionType);

  return <Section section={section} />;

  function determineSection(sectionType) {
    switch (sectionType) {
      case sectionEnum.CALLOUT_PRIMARY:
        return CalloutPrimary;
      default:
        break;
    }
  }
}
