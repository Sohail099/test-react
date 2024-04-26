import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Typography from '../Typography';

type marginRestriction = 'mt-' | 'mb-' | 'my-' | 'm-' | 'md:mt-' | 'md:mb-' | 'md:my-' | 'md:m-';

type Props = {
  height: 'sm' | 'md' | 'lg' | 'full';
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  fullWidth?: boolean;
  title?: string;
  marginClassName?: `${marginRestriction}${number}` | `${marginRestriction}${number} ${marginRestriction}${number}`;
};

const Divider = ({ height, title, fullWidth = false, size = 'h3', marginClassName }: Props) => {
  return (
    <div className="flex items-center">
      <div
        className={twMerge(
          clsx('flex-grow my-2.5 border-t-0 bg-slate-200', marginClassName, [
            height === 'sm' && 'h-[1px] mx-5',
            height === 'md' && 'h-[3px] mx-5',
            height === 'lg' && 'h-[5px] mx-5',
            fullWidth === true && 'w-full -mx-0'
          ])
        )}
      />
      {title && (
        <>
          <div className="mx-3">
            <Typography type={size} customColorClass="text-slate-400">
              {title}
            </Typography>
          </div>
          <div
            className={twMerge(
              clsx('flex-grow my-2.5 border-t-0 bg-slate-200', [
                height === 'sm' && ' h-[1px] mx-5',
                height === 'md' && 'h-[3px] mx-5',
                height === 'lg' && 'h-[5px] mx-5',
                fullWidth === true && 'w-full mx-0'
              ])
            )}
          />
        </>
      )}
    </div>
  );
};

export default Divider;
