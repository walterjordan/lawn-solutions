export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  features: string[];
  commonProblems: string[];
  bestTime: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: 'weed-control',
    title: 'Weed Control',
    shortDescription: 'Targeted pre and post-emergent treatments to stop weeds before they start.',
    fullDescription: 'Most homeowners fight a losing battle against weeds because they only treat what they can currently see. Our professional approach is different. We use commercial-grade "pre-emergents" that create a barrier in the soil, stopping seeds from germinating in the first place. Then, we use targeted "post-emergents" to quickly eliminate any weeds that have already surfaced.',
    icon: '🌿',
    benefits: [
      'Commercial Grade Products: We use licensed products much more effective than DIY options.',
      'Timing is Everything: We know exactly when to apply based on local soil temperatures.',
      'Safety First: Our technicians are trained to apply products safely around your home and family.'
    ],
    features: [
      'Full property assessment.',
      'Blanket pre-emergent application (seasonally appropriate).',
      'Spot-treatment of all visible weeds.',
      'Recommendations for watering and mowing to improve results.'
    ],
    commonProblems: [
      'Dandelions, Clover, and Broadleaf weeds taking over.',
      'Crabgrass appearing every summer despite your efforts.',
      'Nutsedge and difficult grassy weeds that hardware store sprays won\'t kill.',
      'Patches of weeds returning weeks after you pulled them.'
    ],
    bestTime: 'Early Spring (pre-emergent), Late Spring/Early Summer (active treatments), and Fall (winter annual prevention).',
    faqs: [
      {
        question: 'Are your treatments safe for my dog?',
        answer: 'Yes. We ask that you keep pets and children off the lawn until the application has completely dried (usually 1-2 hours). Once dry, it is safe to return.'
      },
      {
        question: 'How long until the weeds die?',
        answer: 'You will typically see weeds begin to curl and yellow within 3-7 days, with complete die-off in 10-14 days.'
      }
    ]
  },
  {
    id: 'fertilization',
    title: 'Lawn Fertilization',
    shortDescription: 'Custom slow-release nutrients designed for the specific soil of the Metro area.',
    fullDescription: 'Our fertilization program isn\'t just about making grass green. It\'s about building a robust root system and thick turf that can withstand the heat and stress of the Metro area climate. We use custom-blended, slow-release granular fertilizers that provide steady nutrition over time, preventing the "surge growth" and subsequent burnout common with cheap fertilizers.',
    icon: '💎',
    benefits: [
      'Custom Blended: Formulated for our specific local soil types.',
      'Slow Release: Provides consistent nutrients for up to 8 weeks.',
      'Thicker Turf: Naturally chokes out weeds by leaving no room for them to grow.'
    ],
    features: [
      'Soil health analysis.',
      'Granular slow-release fertilizer application.',
      'Micronutrient boost (seasonally appropriate).',
      'Customized plan based on your grass type.'
    ],
    commonProblems: [
      'Pale or yellowing grass.',
      'Slow growth and thin patches.',
      'Lawn struggling to survive the summer heat.',
      'Uneven coloring across the property.'
    ],
    bestTime: 'Five to six applications spread throughout the growing season (Early Spring through Late Fall).',
    faqs: [
      {
        question: 'Will this make my grass grow too fast?',
        answer: 'No. Our slow-release formula promotes steady, healthy growth and strong roots rather than just top-growth "spikes".'
      }
    ]
  },
  {
    id: 'aeration',
    title: 'Aeration & Overseeding',
    shortDescription: 'The crucial fall service to relieve soil compaction and thicken turf density.',
    fullDescription: 'Our heavy clay soil in the Metro area often becomes compacted, preventing air, water, and nutrients from reaching the roots. Core aeration removes small plugs of soil, allowing your lawn to breathe. When combined with our high-quality overseeding, it\'s the most effective way to thicken a thin lawn and introduce modern, drought-resistant grass varieties.',
    icon: '🚜',
    benefits: [
      'Relieves Compaction: Allows roots to grow deeper and stronger.',
      'Thickens Lawn: Fills in bare spots and prevents weed encroachment.',
      'Better Drainage: Reduces runoff and improves water absorption.'
    ],
    features: [
      'Double-pass core aeration.',
      'Premium turf-type tall fescue seed blend.',
      'Starter fertilizer application.',
      'Detailed watering instructions for new seed.'
    ],
    commonProblems: [
      'Hard, compacted soil where nothing grows.',
      'Thin, patchy lawn with bare spots.',
      'Old, low-quality grass varieties that struggle in summer.',
      'Water pooling on the surface after rain.'
    ],
    bestTime: 'Late August through October (Fall is the only time we recommend this service).',
    faqs: [
      {
        question: 'When can I mow after seeding?',
        answer: 'Wait until the new grass is about 3-4 inches tall, usually 3-4 weeks after seeding. Ensure your mower blades are sharp!'
      }
    ]
  },
  {
    id: 'shrub-bed',
    title: 'Shrub Bed Weed Control',
    shortDescription: 'Keep your landscaping beds looking pristine and weed-free.',
    fullDescription: 'Don\'t let weeds ruin your beautiful landscaping. Our shrub bed program uses specialized pre-emergents designed specifically for mulch and pine straw beds to stop weeds before they emerge. We also spot-treat any existing weeds, ensuring your flower beds and shrubbery remain the focal point of your property, not the weeds.',
    icon: '🌺',
    benefits: [
      'Saves Time: No more spending your weekends pulling weeds.',
      'Protects Plants: Reduces competition for water and nutrients.',
      'Better Curb Appeal: Pristine beds make the whole property look better.'
    ],
    features: [
      'Pre-emergent barrier application for mulch/pine straw.',
      'Targeted post-emergent treatment for existing weeds.',
      'Safe for established ornamental plants and shrubs.',
      'Regular monitoring visits.'
    ],
    commonProblems: [
      'Weeds taking over mulch and pine straw beds.',
      'Hand-pulling weeds only for them to return days later.',
      'Grass encroaching into landscaping areas.',
      'Difficulty maintaining large landscaped areas.'
    ],
    bestTime: 'Spring and Fall applications provide the best year-round protection.',
    faqs: [
      {
        question: 'Is this safe for my flowers?',
        answer: 'Yes. We use products specifically labeled for use around established ornamental plants. We avoid treating young, newly planted annuals.'
      }
    ]
  }
];

export const annualPlan = {
  title: 'The Complete Annual Lawn Plan',
  subtitle: 'Our worry-free, all-inclusive program for maximum results.',
  priceLabel: 'Starting at $45/visit',
  features: [
    '7 Seasonal Visits per year',
    'Dual-action Pre-Emergent Weed Prevention (Spring & Fall)',
    'Targeted Post-Emergent Weed Control on every visit',
    'Slow-Release Granular Fertilization',
    'Free Service Calls between scheduled visits if weeds persist',
    'Local Technician Analysis'
  ],
  idealFor: 'Homeowners who want the best-looking lawn on the block without lifting a finger.'
};
