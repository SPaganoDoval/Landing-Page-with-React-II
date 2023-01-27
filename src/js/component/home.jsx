import React from "react";
import cares from "../../img/cares.jpg";
import caminitodelrey from "../../img/caminitodelrey.jpg";
import camidecavalls from "../../img/camidecavalls.jpg";
import ocaminodosfaros from "../../img/ocaminodosfaros.jpg";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 gy-2">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl={cares}
							cardTitle="Ruta del Cares (León-Asturias)"
							cardDescription="La Ruta del Cares une los pueblos de Caín y Poncebos, con unos 22 km entre ida y vuelta. A lo largo de ella, te toparás con algunos de los lugares emblemáticos que ver en Asturias, como el Picu Urriellu o el impresionante desfiladero del Cares.

							Esta ruta de senderismo es considerada por muchos la más bonita de las muchas que rodean los Picos de Europa. Teniendo esto en cuenta, muchos visitantes señalan el tramo cercano a Caín como el más espectacular, especialmente en primavera y otoño."
							buttonUrl="https://www.sitiosdeespana.es/articulo/los-25-mejores-lugares-que-ver-en-asturias"
							buttonLabel="Asturias"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl={caminitodelrey}
							cardTitle="Caminito del Rey (Málaga)"
							cardDescription="Entre lo mucho que hay que ver en Málaga, el Caminito del Rey es una de las visitas que no te puedes perder, perfecta tanto si lo que quieres es disfrutar de una belleza natural incomparable, como si lo que te gusta es el avistamiento de aves. 

							Además de parajes como la cueva de Ardales, esta ruta ofrece una serie de construcciones antiquísimas, como la Necrópolis de Las Aguilillas y la Iglesia Rupestre de Bobastro, y otras más recientes como las pasarelas del desfiladero de los Gaitanes, construidas a principios del siglo XX para el mantenimiento de las instalaciones hidroeléctricas de la zona."
							buttonUrl="https://www.sitiosdeespana.es/articulo/que-ver-en-malaga-los-10-imprescindibles"
							buttonLabel="Málaga"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl={camidecavalls}
							cardTitle="Camí de Cavalls (Menorca)"
							cardDescription="Esta ruta de senderismo te da la oportunidad de dar la vuelta a Menorca a lo largo de su precioso litoral, desde el que podrás ver sus bonitas playas y calas, sus acantilados, formaciones costeras y sus bosques. El sendero cubre 185 km separados en 20 etapas, por lo que puede ser la forma perfecta de descubrir la isla entera o de visitar parajes selectos que ver en Menorca.

							Algunos de los enclaves más emblemáticos de la ruta son la Cala en Turqueta, la Cala Mitjaneta y la Torre de Alcafar."
							buttonUrl="https://www.sitiosdeespana.es/articulo/que-ver-y-hacer-en-menorca-las-10-cosas-que-no-debes-perderte"
							buttonLabel="Menorca"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl={ocaminodosfaros}
							cardTitle="O Camiño dos Faros (Galicia)"
							cardDescription="Esta es la ruta que te permitirá descubrir la Costa da Morte, uno de los lugares más conocidos que ver en Galicia. 

							La ruta cubre 200 km de costa distribuidos en 8 etapas, desde Malpica hasta Finisterre. Además de los muchos faros que te encontrarás por el camino, este sendero que regalará vistas inigualables del mar, acantilados, miradores y zonas de avistamiento de aves. 
							
							Por el camino, también descubrirás pintorescos pueblos de pescadores, como Camariñas, y otras villas de interior como Tasaraño, Dor y Allo."
							buttonUrl="https://www.sitiosdeespana.es/articulo/los-25-mejores-lugares-que-ver-en-galicia"
							buttonLabel="Galicia"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Built by Norkys and Sonia❤️  {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
