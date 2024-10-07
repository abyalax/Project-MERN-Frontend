import React, { useState, useRef } from 'react';
import { AddImageIcon } from '../../assets/svg-dinamis';

export type Image = {
    name: string;
    file: File;
    url: string;
};

interface DragAndDropProps {
    loading: boolean
    images: Image[]
    setImages: React.Dispatch<React.SetStateAction<Image[]>>
}

const DragAndDrop = ({ images, setImages, loading } : DragAndDropProps) => {
    const [isHover, setIsHover] = useState(false);
    const [isDragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const kuota = images.length;
    const arr = Array.from(Array(9 - kuota).keys());

    class ClassEvent {
        onDragOver(e: React.DragEvent<HTMLDivElement>) {
            e.preventDefault();
            setDragActive(true);
            e.dataTransfer.dropEffect = 'copy';
        }
        onDragLeave(e: React.DragEvent<HTMLDivElement>) {
            e.preventDefault();
            setDragActive(false);
        }
        onDrop(e: React.DragEvent<HTMLDivElement>) {
            e.preventDefault();
            setDragActive(false);
            if (e.dataTransfer.files) {
                handleFiles(e.dataTransfer.files);
            }
        }
        onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
            if (e.target.files) {
                handleFiles(e.target.files);
            }
        }
        deleteImages(e: React.MouseEvent<HTMLElement>, index: number) {
            e.preventDefault();
            setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        }
    }

    const event = new ClassEvent();

    const handleFiles = (files: FileList) => {
        const newImages: Image[] = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.split('/')[0] !== 'image') continue; // Only accept image files
            if (!images.some((image) => image.name === file.name)) {
                newImages.push({
                    name: file.name,
                    file,
                    url: URL.createObjectURL(file),
                });
            }
        }

        setImages((prevImages) => [...prevImages, ...newImages]);
    };
    return (
        <div className='h-full w-full relative' onDragOver={event.onDragOver} onDragLeave={event.onDragLeave} onDrop={event.onDrop} role='button' onClick={() => fileInputRef.current?.click()} >
            <div className='h-full w-full absolute top-0 bottom-0 left-0 right-0 rounded-2xl flex justify-center items-center select-none' >
                {isDragActive ? (
                    <span className='text-green-500 hover:opacity-60'>Drop Images Here</span>
                ) : (
                    <div className='grid grid-cols-5 grid-rows-2 gap-2 w-full h-full'>
                        {images.length > 0 && (
                            images.map((item, index) => (
                                <div key={item.name} className='flex rounded-lg justify-center items-center z-50  w-full h-full relative'>
                                    <span className='absolute -top-1 w-4 h-4 right-2 z-50 cursor-pointer text-white text-3xl font-bold' onClick={(e) => event.deleteImages(e, index)}>&times;</span>
                                    <img src={item.url} className='w-full h-full object-cover object-center rounded-lg' />
                                </div>
                            )))}
                        {
                            arr.map((item) => (
                                <div key={item} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`border-slate-300 border-2 hover:border-green-500  border-dashed flex flex-col justify-center items-center rounded-lg`}>
                                    <AddImageIcon fill={isHover ? '#22c55e' : '#8d96aa'} />
                                    Foto Produk
                                </div>
                            ))
                        }
                    </div>
                )}
                <input
                    name='file'
                    multiple
                    type='file'
                    className='hidden'
                    ref={fileInputRef}
                    onChange={event.onFileSelect}
                    disabled={loading}
                />
            </div>
        </div>
    );
};

export default DragAndDrop;
