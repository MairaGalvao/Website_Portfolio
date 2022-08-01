export function LoadingAnimation() {
	let phrase = "Full Stack Developer";
	let sign1 = "{";
	let sign2 = "}";
	let arrow = "=> ";
	let parentheses = "()";
	return (
		<div style={{ paddingTop: "200px" }}>
			<div id="loaderHome">
				<span id="boxHome"></span>
				<span id="boxHome"></span>
				<span id="boxHome"></span>
				<div id="codesIcons"></div>
				{/* <span id="txtLoader">FULL STACK DEVELOPER</span> */}

				<div
					class="phraseTopBox"
					style={{ display: "flex", height: "100vh", width: "200vh" }}
				>
					<div
						class="phraseTop"
						style={{ fontFamily: "cursive", fontSize: "45px" }}
					>
						Maira {parentheses} {arrow}{" "}
					</div>
					<div class="phraseTop">
						<span
							class="spanPhrase"
							style={{ fontFamily: "cursive", fontSize: "45px" }}
						>
							{" "}
							{sign1} {phrase} {sign2}{" "}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
