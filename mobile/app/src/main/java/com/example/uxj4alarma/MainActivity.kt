package com.example.uxj4alarma

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.example.uxj4alarma.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // boton para nevagar a agregar recordatorio
        binding.UiAddRecordatorio.setOnClickListener {
            openCreateActivity()
        }
    }

    private fun openCreateActivity(){
        val intent = Intent(this, CreateActivity::class.java)
        startActivity(intent)
    }
}