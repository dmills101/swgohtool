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
    //console.log(service._guildobj);
    expect(service._guildobj.length).toBeGreaterThan(0);
  });
});
