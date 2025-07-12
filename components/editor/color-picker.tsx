'use client'

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChromePicker } from 'react-color';
import { colors } from '@/constants/colors';

interface ColorPickerProps {
  attribute: string;
  label: string;
  currentColor: string;
  handleAttributeChange: (attribute: string, value: any) => void;
} 

const ColorPicker: React.FC<ColorPickerProps> = ({
  attribute,
  label,
  currentColor,
  handleAttributeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex flex-col gap-2`}>
      <Label htmlFor={attribute}>{label}</Label>

      <div className='flex flex-wrap gap-1 p-1'>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant='outline' className='gap-2'>
              <div
                style={{ background: currentColor }}
                className="rounded-md h-6 w-6 cursor-pointer"
              />
              <span>{currentColor}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Tabs defaultValue='colorPicker'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='colorPicker'>🎨</TabsTrigger>
                <TabsTrigger value='suggestions'>⚡️</TabsTrigger>
              </TabsList>
              <TabsContent value='colorPicker' className="p-2">
                <ChromePicker
                  color={currentColor}
                  onChange={(color) => {
                    handleAttributeChange(attribute, color.hex);
                    setIsOpen(false);
                  }}
                />
              </TabsContent>
              <TabsContent value='suggestions' className="p-2">
                <div className='flex flex-wrap gap-1'>
                  {colors.map((color) => (
                    <div
                      key={color}
                      style={{ background: color }}
                      className="rounded-md h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => {
                        handleAttributeChange(attribute, color);
                        setIsOpen(false);
                      }}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs> 
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ColorPicker;