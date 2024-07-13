import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SelectWrapper = styled.div``;

const SelectButton = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 700;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 50px;
`;

const Option = styled.button`
  padding: 0.5rem;
  width: 150px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover {
    background-color: #2c2c2c;
    color: white;
  }
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

type TOption = { code: string; description: string };

interface SelectProps {
  options: TOption[];
  onChange: (id: string) => any;
  label: string;
  name: string;
  selected?: TOption;
}

const Select: React.FC<SelectProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<TOption | null>(null);

  const onClickOption = (option: TOption) => {
    setSelected(option);
    setIsOpen(false);
    props.onChange(option.code);
  };

  useEffect(() => {
    setSelected(props.options[0]);
  }, []);

  return (
    <SelectWrapper>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        {selected?.description ?? 'Select'}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </SelectButton>
      {isOpen && (
        <OptionList>
          {props.options.map((option) => (
            <Option onClick={() => onClickOption(option)} key={option.code} value={option.code}>
              {option.description}
            </Option>
          ))}
        </OptionList>
      )}
    </SelectWrapper>
  );
};

export default Select;
