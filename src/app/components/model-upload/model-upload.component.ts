import { Component, OnInit, OnDestroy } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './model-upload.component.html',
  styleUrls: ['./model-upload.component.css']  // Corrected styleUrls
})
export class ModelUploadComponent implements OnInit, OnDestroy {
  map!: maplibregl.Map; // Map instance

  // Model properties
  location = '';
  developer = '';
  projectName = '';
  file: File | null = null;
  selectedState = '';
  selectedCategory = '';
  selectedSubcategory = '';
  city = '';
  area = '';
  sector = '';

  constructor() {}

  // Lifecycle hook for component initialization
  ngOnInit() {
    this.initializeMap();
  }

  initializeMap(): void {
    this.map = new maplibregl.Map({
      container: 'mapcontainer', // ID of the HTML element where the map will render
      style:  {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: [
              "https://a.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoidmluYXlha2poYSIsImEiOiJjbDVrb2UxMzAwYzRhM2NtcHJsNm5yMDBzIn0.o5CaKuSPs0w9DqDbm1HPBA",
              "https://b.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoidmluYXlha2poYSIsImEiOiJjbDVrb2UxMzAwYzRhM2NtcHJsNm5yMDBzIn0.o5CaKuSPs0w9DqDbm1HPBA",
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      }, // Map style URL
      center: [0, 0], // Initial coordinates [longitude, latitude]
      zoom: 2 // Initial zoom level
    });

    // Add navigation controls (zoom in/out)
    this.map.addControl(new maplibregl.NavigationControl());
  }

  // Clean up the map instance on component destroy
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
