import { TestBed } from '@angular/core/testing';

import { FetchmeService } from './fetchme.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FetchmeService', () => {
  let service: FetchmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
 
         

    service = TestBed.inject(FetchmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the guild', async () => {
    await service.populateGuild();
    expect(service._guildobj).not.toBeNull();
    expect(service._guildobj.length).toBeGreaterThan(0);
  });

  it('should fetch the player', async () => {
    await service.populatePlayer("357182769");
    expect(service._playerobj).not.toBeNull();
    expect(service._playerobj.ally_code.toString()).toEqual("357182769");
  });
});
