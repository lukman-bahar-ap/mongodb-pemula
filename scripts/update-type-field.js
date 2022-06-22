db.ga_asset_consume_logs.aggregate([
    {
      $set: {
        updated_at: { $toDate: '$updated_at' },
      },
    },
    {
      $set: {
        created_at: { $toDate: '$created_at' },
      },
    },
  ])