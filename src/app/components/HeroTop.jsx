'use client'
import { useState } from 'react';
import Left from './HeroComponents/left';
import Right from './HeroComponents/Right';

export default function HeroTopComponent(){
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1'>
            <Left />
            <Right/>
        </div>

        
    )
}