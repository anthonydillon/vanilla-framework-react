import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Breadcrumb from './Breadcrumb';

storiesOf('Breadcrumb', module)
  .add('Default',
    withInfo(`You can use the breadcrumbs pattern to indicate where the current
    page sits in the site's navigation. The separators between each item are
    added via CSS, so you don't have to include them manually.`)(() => (
      <Breadcrumb>
        <AccordionItem title="Title of Item 1">
          <p>Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </AccordionItem>
        <AccordionItem title="Title of Item 2">
          <p>Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </AccordionItem>
        <AccordionItem title="Title of Item 3">
          <p>Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </AccordionItem>
      </Breadcrumb>
    ),
    ),
  );
