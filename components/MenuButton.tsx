"use client"
import React, { useState } from 'react';
import ScrollLink from '@/hooks/ScrollLink';

interface MenuButtonProps {
  id: number;
  icon: any;
  iconClicked: any;
  label: string;
  clickedName: string
}

export default function MenuButton({ id, icon, iconClicked, label, clickedName}: MenuButtonProps) {

    const [pressed, setPressed] = useState(false)


    return (
      <div onClick={() => {pressed ? setPressed(false) : setPressed(true)}}>
        <ScrollLink
          key={id}
          href={`#section-${id}`}
          className={`flex visible bg-secondary-50 dark:bg-primary-900 items-center pl-5 pt-2 pb-2 filter hover:brightness-125 dark:hover:brightness-110`}
        >
       
          {clickedName == label ? iconClicked : icon} <p className="text-sm ml-2">{label}</p>
        </ScrollLink>
      
        </div>
    );
}
