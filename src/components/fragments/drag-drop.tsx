import React, { useState, useRef } from 'react';
import { svg } from '../../assets';

type Image = {
    name: string;
    url: string;
};

const DragAndDrop = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [isDragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isHover, setIsHover] = useState(false);
    const arr = [2, 3, 4, 5, 6, 7, 8, 9];

    function handleFiles(files: FileList) {
        const newImages: Image[] = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((image) => image.name === files[i].name)) {
                newImages.push({
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                });
            }
        }
        setImages((prevImages) => [...prevImages, ...newImages]);
    }

    function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
    }

    function deleteImages(e: React.MouseEvent<HTMLElement>, index: number) {
        e.preventDefault();
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }

    function onDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(true);
        e.dataTransfer.dropEffect = 'copy';
    }

    function onDragLeave(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(false);
    }

    function onDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files) {
            handleFiles(e.dataTransfer.files);
        }
    }

    return (
        <div className='h-full w-full relative' onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} role='button' onClick={() => fileInputRef.current?.click()} >
            <div  className='h-full w-full absolute top-0 bottom-0 left-0 right-0 rounded-2xl flex justify-center items-center select-none' >
                {isDragActive ? (
                    <span className='text-green-500 hover:opacity-60'>Drop Images Here</span>
                ) : (
                    <div  className=' grid grid-cols-5 grid-rows-2 gap-2 w-full h-full '>
                        {images.map((item, index) => (
                            <div className='flex rounded-lg justify-center items-center z-50  w-full h-full relative'>
                                <span className='absolute -top-1 w-4 h-4 right-2 z-50 cursor-pointer text-white text-3xl font-bold' onClick={(e) => deleteImages(e, index)}>&times;</span>
                                <img src={item.url} className='w-full h-full object-cover object-center rounded-lg' />
                            </div>
                        ))}
                    </div>
                )}
                <input
                    name='file'
                    multiple
                    type='file'
                    className='hidden'
                    ref={fileInputRef}
                    onChange={onFileSelect}
                />
            </div>
            <div className='h-full w-full grid grid-cols-5 grid-rows-2 gap-x-2.5 gap-y-2' >
                <div className={`${isHover ? 'border-green-500' : 'border-slate-300'} border-2  border-dashed flex flex-col justify-center items-center rounded-lg`}>
                    <img src={svg.addImage} className='w-8 h-8' />
                    Foto Utama
                </div>
                {arr.map((item) => (
                    <div className={`${isHover ? 'border-green-500' : 'border-slate-300'} border-2  border-dashed flex flex-col justify-center items-center rounded-lg`}>
                        <img src={svg.addImage} className='w-8 h-8' />
                        Foto ke {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragAndDrop;
