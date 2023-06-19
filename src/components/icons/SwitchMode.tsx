import * as React from "react";

const SwitchMode = ({ variant }: { variant: "light" | "dark" }) => {
	return (
		<>
			{variant === "light" ? (
				<svg
					width="60"
					height="36"
					viewBox="0 0 60 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="cursor-pointer"
				>
					<g filter="url(#filter0_i_115_1603)">
						<rect
							y="1"
							width="60"
							height="30"
							rx="15"
							fill="url(#paint0_linear_115_1603)"
						/>
					</g>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.9389 13.1198C13.3829 13.6675 12.6514 14 11.85 14C10.9043 14 10.056 13.5369 9.47856 12.8038C9.24295 12.9295 8.97889 13 8.70002 13C7.70591 13 6.90002 12.1046 6.90002 11C6.90002 9.89543 7.70591 9 8.70002 9C8.79947 9 8.89702 9.00896 8.99208 9.02619C9.49274 7.82962 10.5842 7 11.85 7C12.8772 7 13.7896 7.5463 14.3646 8.39167C14.5209 8.35347 14.6834 8.33333 14.85 8.33333C16.0927 8.33333 17.1 9.45262 17.1 10.8333C17.1 12.214 16.0927 13.3333 14.85 13.3333C14.5257 13.3333 14.2174 13.2571 13.9389 13.1198Z"
						fill="url(#paint1_linear_115_1603)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M29.5264 8.23992C29.2321 8.52984 28.8448 8.70588 28.4206 8.70588C27.9199 8.70588 27.4708 8.46074 27.1651 8.07258C27.0404 8.13917 26.9006 8.17647 26.7529 8.17647C26.2266 8.17647 25.8 7.70242 25.8 7.11765C25.8 6.53288 26.2266 6.05882 26.7529 6.05882C26.8056 6.05882 26.8572 6.06357 26.9075 6.0727C27.1726 5.43921 27.7504 5 28.4206 5C28.9644 5 29.4474 5.28922 29.7518 5.73677C29.8346 5.71655 29.9206 5.70588 30.0088 5.70588C30.6667 5.70588 31.2 6.29845 31.2 7.02941C31.2 7.76038 30.6667 8.35294 30.0088 8.35294C29.8371 8.35294 29.6739 8.31258 29.5264 8.23992Z"
						fill="url(#paint2_linear_115_1603)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M28.2967 16.0399C27.8388 16.4909 27.2364 16.7647 26.5765 16.7647C25.7976 16.7647 25.099 16.3834 24.6235 15.7796C24.4295 15.8831 24.212 15.9412 23.9824 15.9412C23.1637 15.9412 22.5 15.2038 22.5 14.2941C22.5 13.3845 23.1637 12.6471 23.9824 12.6471C24.0642 12.6471 24.1446 12.6544 24.2229 12.6686C24.6352 11.6832 25.534 11 26.5765 11C27.4224 11 28.1737 11.4499 28.6473 12.1461C28.776 12.1146 28.9098 12.0981 29.0471 12.0981C30.0704 12.0981 30.9 13.0198 30.9 14.1569C30.9 15.2939 30.0704 16.2157 29.0471 16.2157C28.78 16.2157 28.5261 16.1529 28.2967 16.0399Z"
						fill="url(#paint3_linear_115_1603)"
					/>
					<g filter="url(#filter1_d_115_1603)">
						<ellipse
							cx="44.7"
							cy="16.6667"
							rx="10.5"
							ry="11.6667"
							fill="url(#paint4_linear_115_1603)"
						/>
						<ellipse
							cx="44.7"
							cy="16.6667"
							rx="8.7"
							ry="9.66667"
							fill="url(#paint5_linear_115_1603)"
						/>
						<ellipse
							cx="44.7"
							cy="16.6667"
							rx="10.5"
							ry="11.6667"
							fill="#FF9255"
						/>
						<ellipse
							cx="44.7"
							cy="16.6667"
							rx="8.7"
							ry="9.66667"
							fill="url(#paint6_linear_115_1603)"
						/>
						<mask
							id="mask0_115_1603"
							style={{ maskType: "alpha" }}
							maskUnits="userSpaceOnUse"
							x="34"
							y="5"
							width="22"
							height="24"
						>
							<ellipse
								cx="44.7"
								cy="16.6667"
								rx="10.5"
								ry="11.6667"
								fill="url(#paint7_linear_115_1603)"
							/>
						</mask>
						<g mask="url(#mask0_115_1603)">
							<path
								d="M46.9499 17.6752C52.5899 10.3419 58.1999 10.1752 60.2999 11.0086L63.7499 14.6753L60.7499 30.5086L38.9999 38.0086L26.8499 31.8419L25.4999 17.1753C30.2999 20.3975 41.3099 25.0086 46.9499 17.6752Z"
								fill="url(#paint8_linear_115_1603)"
							/>
							<path
								d="M43.8 16.6609C31.4409 8.33331 27.8001 10.865 25.9284 12.2119L23.3284 16.6609L29.5205 31.3056L52.2393 33.0558L62.7902 23.9539L61.073 9.33467C57.0672 13.6955 51.6689 21.963 43.8 16.6609Z"
								fill="url(#paint9_linear_115_1603)"
							/>
						</g>
					</g>
					<defs>
						<filter
							id="filter0_i_115_1603"
							x="0"
							y="1"
							width="60"
							height="36"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feMorphology
								radius="3"
								operator="erode"
								in="SourceAlpha"
								result="effect1_innerShadow_115_1603"
							/>
							<feOffset dy="6" />
							<feGaussianBlur stdDeviation="4" />
							<feComposite
								in2="hardAlpha"
								operator="arithmetic"
								k2="-1"
								k3="1"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="shape"
								result="effect1_innerShadow_115_1603"
							/>
						</filter>
						<filter
							id="filter1_d_115_1603"
							x="26.2"
							y="0"
							width="33"
							height="35.3334"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="-2" dy="1" />
							<feGaussianBlur stdDeviation="3" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_115_1603"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_115_1603"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_115_1603"
							x1="30"
							y1="1"
							x2="30"
							y2="31"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#66FFED" />
							<stop offset="1" stopColor="#FFEEB2" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_115_1603"
							x1="12"
							y1="7"
							x2="12"
							y2="14"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFF48F" />
							<stop offset="1" stopColor="#FFFEEA" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_115_1603"
							x1="28.5"
							y1="5"
							x2="28.5"
							y2="8.70588"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFF48F" />
							<stop offset="1" stopColor="#FFFEEA" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_115_1603"
							x1="26.7"
							y1="11"
							x2="26.7"
							y2="16.7647"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFF48F" />
							<stop offset="1" stopColor="#FFFEEA" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_115_1603"
							x1="44.7"
							y1="5"
							x2="44.7"
							y2="28.3333"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFC123" />
							<stop offset="1" stopColor="#F8832E" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_115_1603"
							x1="44.7"
							y1="7"
							x2="44.7"
							y2="26.3333"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFBF24" />
							<stop offset="1" stopColor="#F4924B" />
						</linearGradient>
						<linearGradient
							id="paint6_linear_115_1603"
							x1="44.7"
							y1="7"
							x2="44.7"
							y2="26.3333"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFBF24" />
							<stop offset="1" stopColor="#F4924B" />
						</linearGradient>
						<linearGradient
							id="paint7_linear_115_1603"
							x1="44.7"
							y1="5"
							x2="44.7"
							y2="28.3333"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFC123" />
							<stop offset="1" stopColor="#F8832E" />
						</linearGradient>
						<linearGradient
							id="paint8_linear_115_1603"
							x1="44.6249"
							y1="10.6666"
							x2="44.6249"
							y2="38.0086"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF9D55" stopOpacity="0.6" />
							<stop offset="1" stopColor="#FD8A37" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint9_linear_115_1603"
							x1="41.1139"
							y1="7.87967"
							x2="48.0049"
							y2="34.1658"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFBD3E" stopOpacity="0.49" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>
			) : (
				<svg
					width="79"
					height="42"
					viewBox="0 0 79 42"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="scale-[0.78]"
				>
					<g filter="url(#filter0_i_115_1582)">
						<rect
							x="1"
							y="1"
							width="78"
							height="38"
							rx="19"
							fill="url(#paint0_linear_115_1582)"
						/>
					</g>
					<path
						d="M45.3204 11.9296C45.5103 11.635 45.9316 11.7154 46.017 12.0626L46.3189 13.2897C46.3537 13.4309 46.4533 13.5426 46.5824 13.585L47.7047 13.9544C48.0222 14.0588 48.0818 14.5176 47.8032 14.7128L46.8185 15.4028C46.7052 15.4822 46.6379 15.6193 46.6405 15.7653L46.6628 17.035C46.6692 17.3942 46.2846 17.5973 46.027 17.3708L45.1165 16.5701C45.0118 16.4781 44.8706 16.4511 44.7431 16.4989L43.6346 16.9143C43.321 17.0318 43.0238 16.6986 43.1431 16.3634L43.5652 15.1785C43.6137 15.0422 43.5937 14.8884 43.5124 14.7719L42.8049 13.759C42.6048 13.4724 42.8056 13.0634 43.137 13.0827L44.3083 13.1511C44.443 13.1589 44.5719 13.0909 44.6491 12.9711L45.3204 11.9296Z"
						fill="url(#paint1_linear_115_1582)"
					/>
					<path
						d="M36.4706 6.23108C36.5168 6.15927 36.6195 6.17887 36.6404 6.26348L36.7139 6.56257C36.7224 6.59697 36.7467 6.62419 36.7781 6.63454L37.0517 6.72456C37.1291 6.75002 37.1436 6.86182 37.0757 6.9094L36.8357 7.07759C36.8081 7.09693 36.7917 7.13035 36.7923 7.16594L36.7978 7.4754C36.7993 7.56295 36.7056 7.61245 36.6428 7.55724L36.4209 7.3621C36.3954 7.33965 36.3609 7.33308 36.3299 7.34473L36.0597 7.44597C35.9833 7.47461 35.9108 7.3934 35.9399 7.3117L36.0428 7.02291C36.0546 6.9897 36.0497 6.95222 36.0299 6.92382L35.8575 6.67694C35.8087 6.60709 35.8576 6.5074 35.9384 6.51212L36.2239 6.52878C36.2567 6.53069 36.2881 6.5141 36.307 6.48491L36.4706 6.23108Z"
						fill="url(#paint2_linear_115_1582)"
					/>
					<path
						d="M56.555 14.9967C56.6029 14.7853 56.8574 14.731 56.9757 14.9071L57.3941 15.5294C57.4423 15.6009 57.5211 15.6405 57.6027 15.634L58.3117 15.5772C58.5123 15.5611 58.6386 15.8064 58.5205 15.9826L58.1031 16.6057C58.0551 16.6774 58.0447 16.7708 58.0757 16.8528L58.3446 17.5653C58.4207 17.7668 58.2443 17.9726 58.053 17.9055L57.3766 17.6683C57.2988 17.641 57.2135 17.6592 57.1511 17.7164L56.6083 18.2135C56.4548 18.3542 56.2195 18.2361 56.2193 18.0184L56.2187 17.2487C56.2186 17.1601 56.1763 17.0779 56.1067 17.0313L55.5023 16.6261C55.3313 16.5114 55.3623 16.2327 55.5535 16.1652L56.2295 15.9267C56.3072 15.8993 56.3664 15.8303 56.3858 15.7443L56.555 14.9967Z"
						fill="url(#paint3_linear_115_1582)"
					/>
					<path
						d="M64.5738 10.037C64.6007 9.91858 64.7432 9.8882 64.8095 9.9868L65.0438 10.3353C65.0708 10.3754 65.1149 10.3976 65.1606 10.3939L65.5577 10.3621C65.67 10.3531 65.7408 10.4905 65.6746 10.5892L65.4409 10.9382C65.414 10.9783 65.4082 11.0307 65.4255 11.0765L65.5761 11.4756C65.6188 11.5885 65.52 11.7038 65.4128 11.6662L65.034 11.5333C64.9904 11.518 64.9427 11.5282 64.9077 11.5602L64.6037 11.8387C64.5177 11.9174 64.3859 11.8513 64.3858 11.7294L64.3854 11.2983C64.3854 11.2487 64.3617 11.2027 64.3228 11.1766L63.9842 10.9496C63.8885 10.8854 63.9058 10.7292 64.0129 10.6915L64.3915 10.5579C64.4351 10.5425 64.4682 10.5039 64.4791 10.4557L64.5738 10.037Z"
						fill="url(#paint4_linear_115_1582)"
					/>
					<path
						d="M52.6431 5.16399C52.7727 5.10391 52.908 5.2353 52.8668 5.38122L52.7212 5.89702C52.7045 5.95634 52.7172 6.02082 52.755 6.06751L53.0831 6.47337C53.1759 6.58819 53.1023 6.76806 52.9613 6.77075L52.4632 6.78027C52.4059 6.78137 52.3533 6.81444 52.3239 6.86772L52.0687 7.33094C51.9966 7.46199 51.8158 7.44177 51.7699 7.29751L51.6076 6.78759C51.5889 6.72894 51.5436 6.6849 51.4877 6.67115L51.0019 6.55157C50.8645 6.51774 50.8264 6.32538 50.939 6.23353L51.3368 5.90886C51.3825 5.87152 51.4072 5.81123 51.402 5.74945L51.3569 5.21232C51.3442 5.06037 51.5014 4.9617 51.6169 5.04919L52.025 5.35846C52.072 5.39403 52.1326 5.40081 52.1852 5.37638L52.6431 5.16399Z"
						fill="url(#paint5_linear_115_1582)"
					/>
					<g filter="url(#filter1_d_115_1582)">
						<ellipse
							cx="18.55"
							cy="20"
							rx="13.65"
							ry="14.7778"
							fill="url(#paint6_linear_115_1582)"
						/>
						<ellipse
							cx="18.5501"
							cy="20"
							rx="11.31"
							ry="12.2444"
							fill="url(#paint7_linear_115_1582)"
						/>
					</g>
					<defs>
						<filter
							id="filter0_i_115_1582"
							x="1"
							y="1"
							width="78"
							height="44"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feMorphology
								radius="3"
								operator="erode"
								in="SourceAlpha"
								result="effect1_innerShadow_115_1582"
							/>
							<feOffset dy="6" />
							<feGaussianBlur stdDeviation="4" />
							<feComposite
								in2="hardAlpha"
								operator="arithmetic"
								k2="-1"
								k3="1"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="shape"
								result="effect1_innerShadow_115_1582"
							/>
						</filter>
						<filter
							id="filter1_d_115_1582"
							x="0.900024"
							y="0.222229"
							width="39.3"
							height="41.5556"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="2" dy="1" />
							<feGaussianBlur stdDeviation="3" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_115_1582"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_115_1582"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_115_1582"
							x1="40.975"
							y1="2.47778"
							x2="39.8324"
							y2="38.9948"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2B4485" />
							<stop offset="1" stopColor="#AFCAFF" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_115_1582"
							x1="45.8009"
							y1="11.1841"
							x2="44.459"
							y2="18.2164"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#ADDDFF" />
							<stop offset="1" stopColor="#EDF6FF" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_115_1582"
							x1="36.5877"
							y1="6.04936"
							x2="36.2606"
							y2="7.76334"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#ADDDFF" />
							<stop offset="1" stopColor="#EDF6FF" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_115_1582"
							x1="56.6762"
							y1="14.4615"
							x2="57.5804"
							y2="18.7027"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#ADDDFF" />
							<stop offset="1" stopColor="#EDF6FF" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_115_1582"
							x1="64.6417"
							y1="9.73728"
							x2="65.1481"
							y2="12.1127"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#ADDDFF" />
							<stop offset="1" stopColor="#EDF6FF" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_115_1582"
							x1="52.971"
							y1="5.01195"
							x2="50.9241"
							y2="7.11923"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#ADDDFF" />
							<stop offset="1" stopColor="#EDF6FF" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint6_linear_115_1582"
							x1="18.55"
							y1="5.22223"
							x2="18.55"
							y2="34.7778"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#D6E9FF" />
							<stop offset="1" stopColor="#CDE4FF" />
						</linearGradient>
						<linearGradient
							id="paint7_linear_115_1582"
							x1="18.5501"
							y1="7.75557"
							x2="18.5501"
							y2="32.2445"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#CEE5FF" />
							<stop offset="0.9999" stopColor="#EDF6FF" />
							<stop offset="1" stopColor="#F1F9FF" />
						</linearGradient>
					</defs>
				</svg>
			)}
		</>
	);
};

export default SwitchMode;
