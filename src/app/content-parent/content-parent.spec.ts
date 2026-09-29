import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentParent } from './content-parent';

describe('ContentParent', () => {
  let component: ContentParent;
  let fixture: ComponentFixture<ContentParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentParent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
