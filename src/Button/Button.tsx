/** @jsxImportSource @emotion/react */
import React, { FC, ButtonHTMLAttributes, ReactChild } from 'react';
import { css } from '@emotion/react';
import Color from '../color';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactChild;
  variant?: 'contained' | 'outlined';
  color?: 'default' | 'primary' | 'error';
  dense?: boolean;
}

const buttonStyle = css`
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus {
    box-shadow: 0px 1px 5px rgba(25, 118, 210, 0.3);
    outline: none;
  }
`;

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Button: FC<Props> = ({
  children,
  variant = 'contained',
  color = 'default',
  dense = false,
  disabled,
  ...rest
}) => {
  const containedColorStyle = css`
    padding: ${dense ? '4px 10px' : '10px 24px'};
    color: white;
    background-color: ${Color[color].main};
    &:hover {
      background-color: ${Color[color].light};
    }
    &:active {
      background-color: ${Color[color].dark};
    }
  `;

  const outlinedColorStyle = css`
    padding: ${dense ? '3px 9px' : '9px 23px'};
    border: 1px solid ${Color[color].main};
    color: ${Color[color].main};
    background-color: white;
    &:hover {
      background-color: ${Color[color].lighter};
    }
    &:active {
      border: 1px solid ${Color[color].dark};
      color: ${Color[color].dark};
      background-color: ${Color[color].lighter};
    }
  `;

  const disabledColorStyle = css`
    padding: 10px 24px;
    color: #b2b8c0;
    background-color: #e0e3e6;
    &:focus {
      box-shadow: none;
    }
  `;

  return (
    <button
      css={css`
        ${buttonStyle};
        ${disabled && disabledColorStyle}
        ${!disabled && variant === 'contained' && containedColorStyle}
        ${!disabled && variant === 'outlined' && outlinedColorStyle}
        cursor: ${disabled ? 'default' : 'pointer'};
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
