import * as React from "react";
import { useAppDispatch } from "../../hooks";
import { setHowToPlay } from "../../features/ui/uiSlice";
import Modal from "../shared/Modal";
import Button from "../shared/Button";
import Letter from "../shared/Letter";

const HowToPlay = () => {
	const dispatch = useAppDispatch();
	const handleClose = () => {
		dispatch(setHowToPlay(false));
	};
	return (
		<Modal handleClose={handleClose}>
			<div
				className={`pt-6 sm:pt-[54px] pb-6 px-4 sm:px-[42px] text-[19px] leading-[22px]`}
			>
				<h1 className="text-center text-[35px] leading-[41px] font-bold mb-8">
					Cómo jugar
				</h1>
				<p className="mb-4">Adivina la palabra oculta en cinco intentos.</p>
				<p className="mb-4">
					Cada intento debe ser una palabra válida de 5 letras.
				</p>
				<p className="mb-4">
					Después de cada intento el color de las letras cambia para mostrar qué
					tan cerca estás de acertar la palabra.
				</p>
				<p className="font-bold mb-1">Ejemplos</p>
				<div className="flex justify-between py-4 px-4 sm:px-6">
					<Letter variant={`lightgreen`}>G</Letter>
					<Letter variant="white">A</Letter>
					<Letter variant="white">T</Letter>
					<Letter variant="white">O</Letter>
					<Letter variant="white">S</Letter>
				</div>
				<p className="mb-1">
					La letra G está en la palabra y en la posición correcta.
				</p>
				<div className="flex justify-between py-4 px-4 sm:px-6">
					<Letter variant={`white`}>V</Letter>
					<Letter variant="white">O</Letter>
					<Letter variant={`yellow`}>C</Letter>
					<Letter variant="white">A</Letter>
					<Letter variant="white">L</Letter>
				</div>
				<p className="mb-1">
					La letra C está en la palabra pero en la posición incorrecta.
				</p>
				<div className="flex justify-between py-4 px-4 sm:px-6">
					<Letter variant={`white`}>C</Letter>
					<Letter variant="white">A</Letter>
					<Letter variant={`white`}>N</Letter>
					<Letter variant="white">T</Letter>
					<Letter variant={`darkgray`}>O</Letter>
				</div>
				<p className="mb-4">La letra O no está en la palabra.</p>
				<p className="mb-8">
					Puede haber letras repetidas. Las pistas son independientes para cada
					letra.
				</p>
				<div className="text-center">
					<p className="mb-8">¡Una palabra nueva cada 5 minutos!</p>
					<Button className="" onClick={handleClose}>
						!JUGAR¡
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default HowToPlay;
