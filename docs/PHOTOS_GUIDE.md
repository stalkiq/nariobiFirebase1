# 📸 How to Add Photos to Nairobi College Website

## **Quick Steps to Add New Photos:**

### **1. Add Your Photo File**
- **Place your photo** in the `public/images/` folder
- **Supported formats**: JPG, PNG, GIF, WebP
- **Recommended size**: 800x600 pixels or larger
- **File naming**: Use descriptive names (e.g., `graduation-ceremony.jpg`)

### **2. Update the Photos Data File**
- **Open**: `src/lib/data/photos.ts`
- **Add new photo** following this format:

```typescript
{
  id: '5', // Use the next available number
  src: '/images/your-photo-name.jpg', // Path to your photo
  alt: 'Brief description for accessibility', // What the photo shows
  description: 'Detailed description of the photo' // What this represents
}
```

### **3. Example of Adding a New Photo**

**File**: `public/images/graduation-ceremony.jpg`

**Update**: `src/lib/data/photos.ts`
```typescript
export const photos: Photo[] = [
  // ... existing photos ...
  {
    id: '5',
    src: '/images/graduation-ceremony.jpg',
    alt: 'Graduation Ceremony',
    description: 'Students celebrating their graduation from Nairobi College'
  }
];
```

### **4. What Happens Next**
- **Photo appears automatically** on the photos page
- **"View Full Size" button** works immediately
- **Responsive grid** adjusts to show the new photo
- **No need to restart** the development server

## **📁 File Structure**
```
public/
└── images/
    ├── images.jpg
    ├── download.jpg
    ├── download-1.jpg
    ├── images-1.jpg
    └── your-new-photo.jpg ← Add here!

src/
└── lib/
    └── data/
        └── photos.ts ← Update this file!
```

## **🎯 Best Practices**
- **Use descriptive filenames** (e.g., `student-study-group.jpg`)
- **Keep descriptions concise** but informative
- **Use consistent image sizes** for better layout
- **Optimize images** for web (compress if too large)

## **🚀 After Adding Photos**
1. **Save the photos.ts file**
2. **Refresh the photos page** in your browser
3. **New photos appear automatically**
4. **All buttons work immediately**

## **💡 Tips**
- **ID numbers** should be unique (1, 2, 3, 4, 5, etc.)
- **Photo paths** always start with `/images/`
- **Alt text** should describe what the photo shows
- **Description** can be longer and more detailed

**That's it! Your new photos will appear on the photos page automatically!** 🎉
