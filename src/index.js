import data from './data.js'

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  return Object.keys(monsters).map((key) => {
    const monster = monsters[key]
    return {
      name: key,
      threatLevel: monster.health * monster.damage,
    }
  })
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  return Object.keys(monsters)
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  const threatLevels = {
    lowThreat: [],
    mediumThreat: [],
    highThreat: [],
  }

  Object.keys(monsters).forEach((key) => {
    const monster = monsters[key]
    const threatLevel = monster.health * monster.damage

    if (threatLevel < 10000) {
      threatLevels.lowThreat.push({ name: key, threatLevel })
    } else if (threatLevel <= 50000) {
      threatLevels.mediumThreat.push({ name: key, threatLevel })
    } else {
      threatLevels.highThreat.push({ name: key, threatLevel })
    }
  })

  return threatLevels
}

export function sum(a, b) {
  return a + b
}
