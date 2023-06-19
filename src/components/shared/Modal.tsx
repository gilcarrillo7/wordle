import React, { useRef, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { selectDarkMode } from "../../features/ui/uiSlice";

const Modal = ({
	children,
	handleClose,
}: {
	children: React.ReactNode;
	handleClose: () => void;
}) => {
	const modalRef = useRef<any>(null);

	const darkMode = useAppSelector(selectDarkMode);

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			e.stopPropagation();
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				handleClose();
			}
		};
		document.addEventListener("mousedown", closeModal);
		return () => {
			document.removeEventListener("mousedown", closeModal);
		};
	}, [modalRef]);

	return (
		<div
			className={`${
				darkMode ? "bg-darkbg/89" : "bg-lightbg/89"
			} w-screen h-screen fixed top-0 left-0 z-50 overflow-hidden`}
		>
			<div className="h-full flex justify-center items-center overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none px-6 sm:px-0 py-6">
				<div
					ref={modalRef}
					className={`${
						darkMode ? "bg-darkbg border-black text-white" : "bg-lightbg border-gray"
					} w-full sm:w-[546px] max-h-full border overflow-auto`}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
