'use client'
import { useState } from 'react';
import { cn } from '@nextui-org/react';

function ColorTone() {
  const [selectedColor, setSelectedColor] = useState('Blue');

  const colorOptions = [
    { name: 'Blue', bgColor: '#0000FF' },
    { name: 'Silver', bgColor: '#C0C0C0' },
    { name: 'Black', bgColor: '#000000' },
    { name: 'Yellow', bgColor: '#FFFF00' },
    { name: 'Red', bgColor: '#FF0000' },
  ];

  return (
    <ul className='flex gap-3'>
      {colorOptions.map((color, index) => (
        <li key={color.name}>
          <button
            onClick={() => setSelectedColor(color.name)}
            style={{ backgroundColor: color.bgColor }}
            className={cn(
              'flex   items-center justify-center rounded-full p-0 text-sm border border-gray-500 border-opacity-50 transition-all duration-800 font-semibold ',
              selectedColor === color.name ? 'opacity-100 h-4 w-10' : 'opacity-40 h-4 w-4'
            )}
          >
            {selectedColor === color.name }
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ColorTone;
