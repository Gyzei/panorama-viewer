pannellum.viewer('panorama', {
  default: {
    firstScene: 'jalan',
    type: 'equirectangular',
    autoLoad: true,
    sceneFadeDuration: 500
  },
  // shortcut: posisi hotspot dan beberapa hubungan kamar diperkirakan dari foto, sesuaikan setelah verifikasi lokasi.
  scenes: {
    jalan: {
      title: 'Jalan',
      panorama: 'assets/LT1_DP1.PNG',
      hotSpots: [
        { pitch: -8, yaw: 0, type: 'scene', text: 'Depan Gerbang', sceneId: 'depanGerbang' }
      ]
    },
    depanGerbang: {
      title: 'Depan Gerbang',
      panorama: 'assets/LT1_DP2.PNG',
      hotSpots: [
        { pitch: -5, yaw: 90, type: 'scene', text: 'Jalan', sceneId: 'jalan' },
        { pitch: -5, yaw: 0, type: 'scene', text: 'Parkir', sceneId: 'LT1_PK' },
      ]
    },
    LT1_PK: {
      title: 'Lantai 1 - Parkir',
      panorama: 'assets/LT1_PK.jpeg',
      hotSpots: [
        { pitch: -5, yaw: 160, type: 'scene', text: 'Depan 2', sceneId: 'LT1_DP2' },
        { pitch: -5, yaw: -65, type: 'scene', text: 'Kamar 1', sceneId: 'LT1_K1' },
        { pitch: -5, yaw: -100, type: 'scene', text: 'Lorong 1', sceneId: 'LT1_LR1' },
        { pitch: -5, yaw: -20, type: 'scene', text: 'Lorong 2', sceneId: 'LT1_LR2_1' }
      ]
    },
    LT1_K1: {
      title: 'Lantai 1 - Kamar 1',
      panorama: 'assets/LT1_K1.PNG',
      hotSpots: [
        { pitch: -5, yaw: 0, type: 'scene', text: 'Parkir', sceneId: 'LT1_PK' }
      ]
    },
    LT1_LR1: {
      title: 'Lantai 1 - Lorong 1',
      panorama: 'assets/LT1_LR1.PNG',
      hotSpots: [
        { pitch: -5, yaw: 175, type: 'scene', text: 'Parkir', sceneId: 'LT1_PK' },
        { pitch: -5, yaw: 0, type: 'scene', text: 'Tangga', sceneId: 'LT1_TG' }
      ]
    },
    LT1_LR2_1: {
      title: 'Lantai 1 - Lorong 2.1',
      panorama: 'assets/LT1_LR2-1.PNG',
      hotSpots: [
        { pitch: -5, yaw: 145, type: 'scene', text: 'Parkir', sceneId: 'LT1_PK' },
        { pitch: -5, yaw: 0, type: 'scene', text: 'Lorong 2.2', sceneId: 'LT1_LR2_2' }
      ]
    },
    LT1_LR2_2: {
      title: 'Lantai 1 - Lorong 2.2',
      panorama: 'assets/LT1_LR2-2.PNG',
      hotSpots: [
        { pitch: -5, yaw: 175, type: 'scene', text: 'Lorong 2.1', sceneId: 'LT1_LR2_1' }
      ]
    },
    LT1_TG: {
      title: 'Lantai 1 - Tangga',
      panorama: 'assets/LT1_TG.PNG',
      hotSpots: [
        { pitch: -5, yaw: 90, type: 'scene', text: 'Depan 2', sceneId: 'LT1_DP2' },
        { pitch: -5, yaw: -175, type: 'scene', text: 'Lorong 1', sceneId: 'LT1_LR1' },
        { pitch: 5, yaw: 0, type: 'scene', text: 'Naik ke lantai 2', sceneId: 'LT2_BK1' }
      ]
    },
    LT2_BK1: {
      title: 'Lantai 2 - Balkon 1',
      panorama: 'assets/LT2_BK1.PNG',
      hotSpots: [
        { pitch: -15, yaw: -10, type: 'scene', text: 'Turun ke tangga', sceneId: 'LT1_TG' },
        { pitch: -5, yaw: 95, type: 'scene', text: 'Balkon 2', sceneId: 'LT2_BK2' }
      ]
    },
    LT2_BK2: {
      title: 'Lantai 2 - Balkon 2',
      panorama: 'assets/LT2_BK2.PNG',
      hotSpots: [
        { pitch: -5, yaw: 165, type: 'scene', text: 'Balkon 1', sceneId: 'LT2_BK1' },
        { pitch: -5, yaw: 0, type: 'scene', text: 'Balkon 3', sceneId: 'LT2_BK3' }
      ]
    },
    LT2_BK3: {
      title: 'Lantai 2 - Balkon 3',
      panorama: 'assets/LT2_BK3.PNG',
      hotSpots: [
        { pitch: -5, yaw: 90, type: 'scene', text: 'Balkon 2', sceneId: 'LT2_BK2' },
        { pitch: -5, yaw: -90, type: 'scene', text: 'Balkon 4', sceneId: 'LT2_BK4' },
        { pitch: -5, yaw: -160, type: 'scene', text: 'Kamar 1', sceneId: 'LT2_K1' }
      ]
    },
    LT2_BK4: {
      title: 'Lantai 2 - Balkon 4',
      panorama: 'assets/LT2_BK4.PNG',
      hotSpots: [
        { pitch: -5, yaw: 0, type: 'scene', text: 'Balkon 3', sceneId: 'LT2_BK3' },
        { pitch: -5, yaw: -90, type: 'scene', text: 'Kamar 2', sceneId: 'LT2_K2' }
      ]
    },
    LT2_K1: {
      title: 'Lantai 2 - Kamar 1',
      panorama: 'assets/LT2_K1.PNG',
      hotSpots: [
        { pitch: -5, yaw: 50, type: 'scene', text: 'Balkon 3', sceneId: 'LT2_BK3' }
      ]
    },
    LT2_K2: {
      title: 'Lantai 2 - Kamar 2',
      panorama: 'assets/LT2_K2.PNG',
      hotSpots: [
        { pitch: -5, yaw: 140, type: 'scene', text: 'Balkon 4', sceneId: 'LT2_BK4' }
      ]
    }
  }
});
