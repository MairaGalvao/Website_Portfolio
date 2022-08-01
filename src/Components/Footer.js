import React from "react";
import { Box } from "@material-ui/core";
import "../css/footer.css";

export function Footer() {
	return (
		<>
			<div className="mainFooter">
				<footer class="footer-distributed">
					<div class="footer-center">
						<div>
							<i class="fa fa-envelope"></i>
							<p>
								<a href="mailto:mairagalvao01@gmail.com">
									mairagalvao01@gmail.com
								</a>
							</p>
						</div>
					</div>

					<div class="footer-right">
						{/* <p class="footer-company-about">
							<span>About the company</span>
							Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
							euismod convallis velit, eu auctor lacus vehicula sit amet.
						</p> */}

						<div class="footer-icons">
							<a target="_blank" href="https://mairagalvao.medium.com/">
								<i class="fa fa-medium"></i>
							</a>

							<a
								target="_blank"
								href="https://www.linkedin.com/in/maira-galvao"
							>
								<i class="fa fa-linkedin"></i>
							</a>
							<a target="_blank" href="https://github.com/MairaGalvao">
								<i class="fa fa-github"></i>
							</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
