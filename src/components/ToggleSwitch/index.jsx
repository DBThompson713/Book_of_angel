import React from 'react';

function Toggle(props) {
  const { checked, onChange } = props;

  return (
    <>
      <label>
        <span className={`switch-wrapper`}>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => onChange(e)}
          />
          <span className={`switch`}>
            <span className='switch-handle' />
          </span>
        </span>
      </label>
    </>
  );
}

export default Toggle;
