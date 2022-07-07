import React from "react";
import { Box } from "@material-ui/core";
import "../css/footer.css";

export function Footer() {
	return (
		<>
			{/* <Box id="mainFooter" >
				<section id="lab_social_icon_footer">
					<link
						href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
						rel="stylesheet"
					/>
					<Box className="container" style={{ paddingLeft: "100px" }}>
						<Box className="text-center center-block">
							<a href="https://www.linkedin.com/in/maira-galvao">
								<i id="social-fb" className="fab fa-linkedin fa-2x social"></i>
							</a>
							<a href="https://github.com/MairaGalvao">
								<i id="social-tw" className="fa fa-github fa-2x social"></i>
							</a>
							<a href="mailto:mairagalvao01@gmail.com">
								<i
									id="social-gp"
									className="fa fa-google-plus-square fa-2x social"
								></i>
							</a>
						</Box>
					</Box>
					<p
						style={{
							color: "black",
							paddingRight: "150px",
							fontFamily: "Poppins sans-serif",
							fontSize: "22px",
						}}
					>
						©2021 Maíra Galvão
					</p>
				</section>
			</Box> */}

			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-6 col-xs-12">
						<ul class="social-icons">
							<li>
								<a class="facebook" href="#">
									<i class="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a class="twitter" href="#">
									<i class="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a class="dribbble" href="#">
									<i class="fa fa-dribbble"></i>
								</a>
							</li>
							<li>
								<a class="linkedin" href="#">
									<i class="fa fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
