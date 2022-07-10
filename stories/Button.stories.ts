import { componentWrapperDecorator } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ButtonComponent } from '@components/sweetui-button/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

const TemplateWithIcon: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
    <sweetui-button
      action="${args.color}"
      size="${args.size}"
      label="${args.label}"
      type="${args.type}"
      (onClick)="onClick($event)"
    >
    <span icon>⚛️</span>
    </sweetui-button>
`,
});
TemplateWithIcon.decorators = [componentWrapperDecorator(ButtonComponent)];

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  color: 'success',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  color: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning',
  color: 'warning',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  isDisabled: true,
};

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  label: 'With Icon',
};
