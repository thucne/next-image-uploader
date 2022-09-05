import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";

const UploadComponent = ({
    photo, setPhoto,
    alt, objectFit,
    setFileName, setSize,
    isFormik, getFileSize,
    disabled, inputRef,
    className, hoverIcon,
    dropScope = "element",
    onError = () => { },
    onDraggingImage,
}) => {
    const [dragging, setDragging] = useState(false);
    const [loadingImage, setLoadingImage] = useState(false);
    const [localPhoto, setLocalPhoto] = useState("");
    const alRef = useRef(null);
    const [upLoadRef, setUploadRef] = useState(null);
    const [newEffect, setNewEffect] = useState(false);
    const [showHoverIcon, setShowHoverIcon] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target.value);
        if (
            e.target.files &&
            e.target.files[0] &&
            !e.target.files[0].type.includes("image/")
        ) {
            if (onError) onError("File is not an image");
            return;
        }
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            const fileName = e.target.files[0].name;
            const file = e.target.files[0];
            reader.onload = async (e) => {
                setLocalPhoto(e.target.result);
                setLoadingImage(true);
                if (setFileName) {
                    setFileName(fileName);
                }
                if (setSize) {
                    const newImg = new window.Image();
                    newImg.src = e.target.result;
                    newImg.onload = function () {
                        setSize({ width: this.width, height: this.height });
                    };
                }
                if (setPhoto) {
                    if (isFormik) {
                        setPhoto(file, e.target.result);
                    } else {
                        setPhoto(e.target.result);
                    }
                }
                if (getFileSize) {
                    getFileSize(file?.size);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const dropHandler = useCallback((ev) => {
        setDragging(false);

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === "file") {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    if (file.type.includes("image/")) {
                        let reader = new FileReader();
                        reader.onload = async (e) => {
                            setLocalPhoto(e.target.result);
                            setLoadingImage(true);
                            if (setFileName) {
                                setFileName(file.name);
                            }
                            if (setSize) {
                                const newImg = new window.Image();
                                newImg.src = e.target.result;
                                newImg.onload = function () {
                                    setSize({ width: this.width, height: this.height });
                                };
                            }
                            if (setPhoto) {
                                if (isFormik) {
                                    setPhoto(file, e.target.result);
                                } else {
                                    setPhoto(e.target.result);
                                }
                            }
                            if (getFileSize) {
                                getFileSize(file?.size);
                            }
                        };
                        reader.readAsDataURL(file);
                    } else {
                        if (onError) onError("File is not an image");
                    }
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                if (ev.dataTransfer.files[i].type.includes("image/")) {
                    let reader = new FileReader();
                    reader.onload = async (e) => {
                        setLocalPhoto(e.target.result);
                        setLoadingImage(true);
                        if (setFileName) {
                            setFileName(ev.dataTransfer.files[i].name);
                        }
                        if (setSize) {
                            const newImg = new window.Image();
                            newImg.src = e.target.result;
                            newImg.onload = function () {
                                setSize({ width: this.width, height: this.height });
                            };
                        }
                        if (setPhoto) {
                            if (isFormik) {
                                setPhoto(ev.dataTransfer.files[i], e.target.result);
                            } else {
                                setPhoto(e.target.result);
                            }
                        }
                        if (getFileSize) {
                            getFileSize(ev.dataTransfer.files[i]?.size);
                        }
                    };
                    reader.readAsDataURL(ev.dataTransfer.files[i]);
                } else {
                    if (onError) onError("File is not an image");
                }
            }
        }

    }, [getFileSize, isFormik, setFileName, setPhoto, setSize]);

    const dragOverHandler = useCallback((ev) => {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        setDragging(true);
    }, [])

    const dragLeaveHandler = useCallback((ev) => {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        setDragging(false);
    }, []);

    const dragEnterHandler = useCallback((ev) => {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        setDragging(true);
    }, []);


    useEffect(() => {
        if (dropScope === "window") {
            document.addEventListener("dragover", dragOverHandler);
            document.addEventListener("drop", dropHandler);
            document.addEventListener("mouseout", dragLeaveHandler);
        }
        return () => {
            if (dropScope === "window") {
                document.removeEventListener("dragover", dragOverHandler);
                document.removeEventListener("drop", dropHandler);
                document.removeEventListener("mouseout", dragLeaveHandler);
            }
        }
    }, [dropHandler, dropScope, dragEnterHandler, dragLeaveHandler, dragOverHandler]);

    useEffect(() => {
        if (inputRef) {
            setUploadRef(inputRef);
        } else {
            setUploadRef(alRef);
        }
    }, [inputRef]);

    useEffect(() => {
        if (photo) {
            setLocalPhoto(photo);
        }
    }, [photo]);

    useEffect(() => {
        if (localPhoto && photo !== localPhoto) {
            setNewEffect(true);
            setTimeout(() => setNewEffect(false), 3000);
        }
    }, [localPhoto]);

    return (
        <div
            style={{
                ...rootStyle,
                border: photo ? "none" : "1px dashed #ccc",
                filter: showHoverIcon ? "brightness(0.8)" : "none",
            }}
            className={`${className}`}
            onClick={() => upLoadRef.current?.click()}
            onMouseEnter={hoverIcon && !dragging ? () => setShowHoverIcon(true) : null}
            onMouseLeave={hoverIcon && !dragging ? () => setShowHoverIcon(false) : null}
        >
            <style jsx="true">
                {`
                    .blink {
                        animation: blinker 1s linear infinite;
                      }
                      
                    @keyframes blinker {
                        50% {
                          opacity: 0;
                        }
                    }
                `}
            </style>
            {
                hoverIcon && (<span
                    style={{
                        ...hoverIconStyle,
                        opacity: showHoverIcon ? 1 : 0,
                    }}
                >
                    {hoverIcon}
                </span>)
            }
            <input
                type="file"
                ref={upLoadRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleChange}
                disabled={disabled}
            />

            {
                dropScope === "window" && dragging && (
                    <div style={windowDropStyle}>
                        <div style={{
                            position: "relative",
                            width: "50%",
                            height: "50%",
                        }}>
                            <Image
                                src={onDraggingImage || "https://res.cloudinary.com/katyperrycbt/image/upload/v1662305403/f8aevquseg2l7lowo8kl.gif"}
                                alt={"launching"}
                                layout="fill"
                                quality={100}
                                objectFit={"contain"}
                                priority={true}
                            />
                        </div>

                        <p style={{
                            color: "black",
                            fontSize: "1.5rem",
                        }}>
                            Drop your image here
                        </p>
                    </div>
                )
            }

            <div
                style={dragAndDropStyle}
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                onDragLeave={dragLeaveHandler}
                onDragEnter={dragEnterHandler}
            />

            {(localPhoto?.length > 0) && (
                <div
                    style={{
                        display: loadingImage ? "none" : "flex",
                        ...photoStyle,
                    }}
                >

                    <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}>
                        <Image
                            src={localPhoto}
                            alt={alt || "image"}
                            layout="fill"
                            quality={100}
                            objectFit={objectFit || "contain"}
                            onLoadingComplete={() => setLoadingImage(false)}
                            priority={true}
                        />
                    </div>
                    {/* display a green circle around the image */}
                    {newEffect && (
                        <div style={newEffectStyle} className="blink">
                            ✔
                        </div>
                    )}
                </div>
            )}

            {(dragging && dropScope !== "window") && (
                <div
                    style={{
                        display: "flex",
                        ...draggingStyle
                    }}
                >

                    <div style={{ width: "100%", height: "100%", position: "relative" }}>
                        <Image
                            src={onDraggingImage || "https://res.cloudinary.com/katyperrycbt/image/upload/v1662305403/f8aevquseg2l7lowo8kl.gif"}
                            alt={"launching"}
                            layout="fill"
                            quality={100}
                            objectFit={objectFit || "contain"}
                            priority={true}
                        />
                    </div>
                </div>
            )}
        </div>
    )
};

export default UploadComponent;

const newEffectStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "3px dashed green",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
}

const windowDropStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "calc(100vw - 24px)",
    height: "calc(100vh - 24px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000000,
    border: "2px dashed orange",
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#fff",
    flexDirection: "column",
}

const photoStyle = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%",
}

const draggingStyle = {
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%",
}

const dragAndDropStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const hoverIconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 20000000,
}

const rootStyle = {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
