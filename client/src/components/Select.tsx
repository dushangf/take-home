import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 700;
`;

const Option = styled.option`
  padding: 0.5rem;
`;

type OptionType = { code: string; description: string };

interface SelectProps {
  options: OptionType[];
  onChange: (id: string) => any;
  label: string;
  name: string;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <SelectWrapper onChange={(e) => props.onChange(e.target.value)}>
      {props.options.map((option) => (
        <Option key={option.code} value={option.code}>
          {option.description}
        </Option>
      ))}
    </SelectWrapper>
  );
};

export default Select;
