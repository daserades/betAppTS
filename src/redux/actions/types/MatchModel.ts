export interface Match {
  _id: string;
  Coupon?: [
    {
      _id: string;
      League?: string;
      Date?: string;
      FirstTeam?: string;
      SecondTeam?: string;
      Guess?: string;
      Rate?: string;
      Comment?: string;
      MatchState?: number;
    }
  ];
  CouponState?: number;
  CouponComment?: string;
  CouponRate?: number;
  AddedBy?: string;
  CouponDate?: {
    type?: Date;
    default?: "";
  };
}

export type MatchType = {
  matchState: Match[];
};
