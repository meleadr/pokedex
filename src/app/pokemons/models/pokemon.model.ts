export class Pokemon {
  id!: number;
  name!: string;
  sprites!: {
    front_default: string;
    back_default: string;
  };
  types!: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  stats!: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
  weight!: number;
  height!: number;
  order!: number;
}
