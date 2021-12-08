import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public datasets: string[] = ['fsd50k', 'fsd_mix_sed', 'urbansound8k', 'ust'];
  public perturbations: string[] = ['lowpass_scipy', 'highpass_scipy', 'reverb', 'gain'];
  public metrics: string[] = ['cosine_distance', 'cophe_corr', 'fad'];

  title = 'embedding-robustness';



}
