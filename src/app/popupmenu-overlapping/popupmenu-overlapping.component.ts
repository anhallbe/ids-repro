import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'app-popupmenu-overlapping',
  templateUrl: './popupmenu-overlapping.component.html',
  styleUrls: ['./popupmenu-overlapping.component.css']
})
export class PopupmenuOverlappingComponent implements OnInit {

  infors: Item[] = [
    {
      id: 198798,
      name: "Infor 1",
      link: "https://www.infor.com"
    }, {
      id: 899872,
      name: "Infor 2",
      link: "https://www.infor.com"
    }, {
      id: 389879,
      name: "Infor 3",
      link: "https://www.infor.com"
    }, {
      id: 479858,
      name: "Infor 4",
      link: "https://www.infor.com"
    }, {
      id: 987755,
      name: "Infor 5",
      link: "https://www.infor.com"
    }
  ];
  coolWhales: Item[] = [{ id: 877561, name: "Blue Whale", link: "https://animalqueries.com/wp-content/uploads/2022/03/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHgxMzU2MDI1LWltYWdlLWt3dnZ5N3h5LmpwZw-1024x768.jpg" },
  { id: 244654, name: "Humpback Whale", link: "https://images.newscientist.com/wp-content/uploads/2022/02/15175442/PRI_223714463.jpg" },
  { id: 398857, name: "Beluga", link: "https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxOS0zLTE5MTczYS5qcGc.jpg" },
  { id: 424423, name: "Sperm Whale", link: "https://commons.wikimedia.org/wiki/File:Mother_and_baby_sperm_whale.jpg" }];


  whaleMenuId = "whaleMenu";
  inforMenuId = "inforMenu";
  activeItem: Item;

  constructor() { }

  ngOnInit(): void {
  }

  openLink() {
    if (!this.activeItem) {
      return;
    }
    const linkToOpen = this.activeItem.link;
    window.location.assign(linkToOpen);
  }

  // No worries, the whale will be back when we refresh the page.
  deleteWhale() {
    if (!this.activeItem) {
      return;
    }
    const whaleToDelete = this.activeItem;
    const index = this.coolWhales.findIndex((opt) => opt.id === whaleToDelete.id);
    this.coolWhales.splice(index, 1);
  }

  admireWhale() {
    if (!this.activeItem) {
      return;
    }
    const whaleToAdmire = this.activeItem;
    console.log(`You admire the ${whaleToAdmire.name}`);
  }

  setActiveItem(p) {
    // Beforeopen event
    let itemId = Number($(p.e?.currentTarget).attr("id"));
    if (!itemId) {
      // Mousedown event
      itemId = Number($(p.target).parent().attr("id"));
    }
    this.activeItem = this.coolWhales.find((whale) => whale.id === itemId);
    if (!this.activeItem) {
      this.activeItem = this.infors.find((infor) => infor.id === itemId)
    }
  }

}
