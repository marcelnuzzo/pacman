class Personnage {
	constructor(ligne,colonne,imagesrc,nom) {
		this.nom=nom;
		this.ligne=ligne;
		this.colonne=colonne;		
		this.img=document.createElement("img");
		this.img.src=imagesrc;
		this.img.style.width="30px";
		this.img.style.height="30px";		
		this.img.alt=nom;
		let oTd=oTable.rows[ligne].cells[colonne];
		oTd.appendChild(this.img);
	}

	deplacer(newligne,newcolonne) {
		let oTd=oTable.rows[this.ligne].cells[this.colonne];
		oTd.innerHTML="";
		this.ligne=newligne;
		this.colonne=newcolonne;
		oTd=oTable.rows[this.ligne].cells[this.colonne];
		//oTd.innerHTML="";
		oTd.appendChild(this.img);
		//oTd.innerHTML="";
	}
}