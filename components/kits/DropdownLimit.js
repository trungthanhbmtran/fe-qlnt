import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import useDropLimit from '../../hooks/useDropLimit'

const DropdownLimit = (props) => {
  // const dropdownOpen = useDropLimit()
  const [dropdownOpen, setOpen] = useState(false);
  const { current, arrayLimit, _change_Limit } = props

  const toggle = () => setOpen(!dropdownOpen);

  const _render_List = () => {
    return arrayLimit.map((item) => {
      return (
        <DropdownItem key={item} onClick={() => _change_Limit(item)} >{item}</DropdownItem>
      )
    })
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {current}
      </DropdownToggle>
      <DropdownMenu>
        {_render_List()}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default DropdownLimit;