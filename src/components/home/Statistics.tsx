import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setShowStatistics } from "../../features/ui/uiSlice";
import {
	selectPlayed,
	selectWins,
	selectCorrectWord,
} from "../../features/words/wordsSlice";
import Modal from "../shared/Modal";
import Button from "../shared/Button";

const Statatitics = () => {
	const dispatch = useAppDispatch();
	const wins = useAppSelector(selectWins);
	const played = useAppSelector(selectPlayed);
	const correctWord = useAppSelector(selectCorrectWord);

	const handleClose = () => {
		dispatch(setShowStatistics(false));
	};
	return (
		<Modal handleClose={handleClose}>
			<div
				className={`pt-6 sm:pt-[54px] pb-6 px-4 sm:px-[42px] text-[19px] leading-[22px]`}
			>
				<h1 className="text-center text-[35px] leading-[41px] font-bold mb-8">
					Estadísticas
				</h1>
				<div className="flex justify-between mb-12">
					<div className="flex flex-col">
						<p className="mb-4 text-[35px] leading-[41px] font-bold text-center">
							{played}
						</p>
						<p className="text-[21px] leading-[25px]">Jugadas</p>
					</div>
					<div className="flex flex-col">
						<p className="mb-4 text-[35px] leading-[41px] font-bold text-center">
							{wins}
						</p>
						<p className="text-[21px] leading-[25px]">Victorias</p>
					</div>
				</div>
				{correctWord && (
					<div className="my-6 text-[19px] leading-[22px] text-center">
						La palabra era: <span className="font-bold">{correctWord}</span>
					</div>
				)}
				<div className="flex flex-col items-center">
					<p className="mb-6 text-[19px] leading-[22px]">SIGUIENTE PALABRA</p>
					<p className="text-[24px] leading-[28px] font-bold">04:10</p>
				</div>
				<div className="text-center mt-12">
					<Button className="" onClick={handleClose}>
						Aceptar
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default Statatitics;
