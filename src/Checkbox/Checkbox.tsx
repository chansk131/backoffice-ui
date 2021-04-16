/** @jsxImportSource @emotion/react */
import { FC, InputHTMLAttributes, ReactChild } from 'react';
import { css } from '@emotion/react';
import Color from '../color';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactChild;
  variant?: 'contained' | 'outlined';
  color?: 'default' | 'primary' | 'error';
  dense?: boolean;
  label?: string;
  description?: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Checkbox: FC<Props> = ({
  children,
  variant = 'contained',
  color = 'default',
  dense = false,
  label,
  description,
  disabled,
  ...rest
}) => {
  return (
    <>
      <label
        css={css`
          display: flex;
          flex-direction: column;
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          font-size: 16px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          color: ${disabled ? '#838e9a' : '#1E2227'};
          /* On mouse-over, add a grey background color */
          &:hover input ~ span {
            border-radius: 1px;
            border: 1px solid ${disabled ? '#B2B8C0' : '#1976d2'};
          }
          /* Style the indicator (dot/circle) */
          &:hover input:checked ~ span {
            background-color: ${disabled ? '#B2B8C0' : '#1976d2'};
          }

          p {
            margin: 0;
            padding: 0;
            margin-top: 4px;
            font-size: 14px;
            color: #838e9a;
          }
        `}
      >
        {label}
        <input
          css={css`
            /* Hide the browser's default radio button */
            position: absolute;
            opacity: 0;
            cursor: pointer;
            /* Show the indicator (dot/circle) when checked */
            &:checked ~ span:after {
              display: block;
            }

            &:checked ~ span {
              border: 1px solid ${disabled ? '#B2B8C0' : '#505b67'};
              background-color: ${disabled ? '#B2B8C0' : '#505b67'};
            }
          `}
          type="checkbox"
          disabled={disabled}
          {...rest}
        ></input>
        <span
          css={css`
            /* Create a custom radio button */
            position: absolute;
            top: 1px;
            left: 0;
            height: 12px;
            width: 12px;
            border-radius: 1px;
            border: 1px solid ${disabled ? '#B2B8C0' : '#838e9a'};
            background-color: ${disabled ? '#EFF1F2' : 'none'};

            /* Create the indicator (the dot/circle - hidden when not checked) */
            &:after {
              content: '';
              position: absolute;
              display: none;
              /* Style the indicator (dot/circle) */
              left: 3px;
              top: 0px;
              width: 4px;
              height: 8px;
              border: solid white;
              border-width: 0 2px 2px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          `}
        ></span>
        <p>{description}</p>
      </label>
    </>
  );
};
